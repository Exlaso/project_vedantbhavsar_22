"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

// Define the Medicine type right here for better portability
export interface Medicine {
  name: string;
  description: string;
  dosage?: string;
  imageUrl?: string;
  sideEffects?: string[];
  warnings?: string[];
}

interface MedicineCardProps {
  medicine: Medicine;
  onAddToCart?: (medicine: Medicine) => void;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  compact?: boolean;
  className?: string;
}

export function MedicineCard({
  medicine,
  onAddToCart,
  buttonText = "Add to Cart",
  buttonIcon = <Plus className="mr-2 h-4 w-4" />,
  compact = false,
  className = "",
}: MedicineCardProps) {
  const [imageError, setImageError] = useState(false);

  // Log when a medicine card is rendered
  useEffect(() => {
     console.log("Rendering medicine card:", medicine?.name || "unknown");
  }, [medicine?.name]);

  // Ensure we have valid data
  if (!medicine || !medicine.name) {
    console.error("Invalid medicine data:", medicine);
    return null;
  }

  // Generate a custom Unsplash image URL based on the medicine name
  const unsplashImageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(
    medicine.name.split(" ")[0].replace(/[^a-zA-Z0-9]/g, "")
  )},medicine,pill,healthcare`;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(medicine);
    }
  };

  return (
    <Card
      className={`overflow-hidden  shadow-sm hover:shadow ${className}`}
    >
      {!compact && (
        <div className="aspect-video relative bg-muted">
          <img
            src={
              imageError
                ? `/placeholder.svg?height=200&width=300`
                : medicine.imageUrl || unsplashImageUrl
            }
            alt={medicine.name}
            className="object-cover w-full h-full"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <CardHeader className={compact ? "p-3" : "p-3"}>
        <CardTitle className={compact ? "text-base" : "text-base"}>
          {medicine.name}
        </CardTitle>
      </CardHeader>
      <CardContent className={compact ? "p-3 pt-0" : "p-3 pt-0"}>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {medicine.description}
        </p>
        {medicine.dosage && (
          <p className="text-sm mt-2">
            <span className="font-medium">Dosage:</span> {medicine.dosage}
          </p>
        )}
        {medicine.sideEffects && medicine.sideEffects.length > 0 && (
          <div className="text-sm mt-2">
            <span className="font-medium">Side Effects:</span>
            <ul className="list-disc pl-5 mt-1">
              {medicine.sideEffects
                .slice(0, compact ? 1 : 2)
                .map((effect, i) => (
                  <li key={i} className="text-xs">
                    {effect}
                  </li>
                ))}
              {medicine.sideEffects.length > (compact ? 1 : 2) && (
                <li className="text-xs">And others...</li>
              )}
            </ul>
          </div>
        )}
        {medicine.warnings && medicine.warnings.length > 0 && (
          <div className="text-sm mt-2">
            <span className="font-medium text-destructive">Warnings:</span>
            <ul className="list-disc pl-5 mt-1">
              {medicine.warnings.slice(0, 1).map((warning, i) => (
                <li key={i} className="text-xs text-destructive/80">
                  {warning}
                </li>
              ))}
              {medicine.warnings.length > 1 && (
                <li className="text-xs text-destructive/80">
                  See package for more warnings
                </li>
              )}
            </ul>
          </div>
        )}
      </CardContent>
      {onAddToCart && (
        <CardFooter className={compact ? "p-3 pt-0" : "p-3 pt-0"}>
          <Button
            onClick={handleAddToCart}
            className="w-full text-sm h-9 font-medium"
            size="sm"
          >
            {buttonIcon}
            {buttonText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
