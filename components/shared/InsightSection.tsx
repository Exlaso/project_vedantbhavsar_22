"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface InsightProps {
  content: React.ReactNode
  causes: MentalHealthItem[]
  solutions: MentalHealthItem[]
}

interface MentalHealthItem {
  title: string
  description: string
}

export function InsightSection({ content, causes, solutions }: InsightProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Mental Health Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="causes">Causes</TabsTrigger>
            <TabsTrigger value="solutions">Solutions</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <div className="prose prose-sm max-w-none dark:prose-invert">{content}</div>
          </TabsContent>
          <TabsContent value="causes" className="mt-4 space-y-4">
            {causes.map((cause, index) => (
              <div key={index} className="border-l-4 border-destructive pl-4 py-2">
                <h3 className="font-medium">{cause.title}</h3>
                <p className="text-sm text-muted-foreground">{cause.description}</p>
              </div>
            ))}
          </TabsContent>
          <TabsContent value="solutions" className="mt-4 space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-medium">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

