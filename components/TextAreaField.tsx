import { Textarea } from "@/components/ui/textarea";
import {AutoFormFieldProps} from "@autoform/react";

export default function TextAreaField({id,label,inputProps}: AutoFormFieldProps) {
    return (
        <div className="*:not-first:mt-2">
            <Textarea id={id} {...inputProps} placeholder="Leave a message" required />
        </div>
    );
}


