import cn from "@/lib/helper/cn";
import { focus } from "@/lib/style/focus";
import { input } from "@/lib/style/input";
import { useField } from "formik";
import { useId } from "react";

/**
 * This is custom Input component
 */
const Input = ({
  name,
  placeholder,
  id,
  label,
  disabled,
  required,
  type,
  className,
}) => {
  const inputId = useId();
  const [field, { touched, error }] = useField({ name });

  const props = { placeholder, disabled, type };

  return (
    <div className="w-full">
      {label && (
        <label
          className={input.label}
          aria-disabled={disabled}
          aria-required={required}
          htmlFor={id || inputId}
        >
          {label}
          {required && (
            <span className="absolute -top-2 left-full text-lg text-red-500">
              *
            </span>
          )}
        </label>
      )}
      <input
        className={cn(
          input.base,
          focus.base,
          error && touched && input.error,
          error && touched && focus.error,
          className,
        )}
        id={id || inputId}
        aria-required={required}
        aria-disabled={disabled}
        {...field}
        {...props}
      />
      {error && touched ? (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      ) : null}
    </div>
  );
};

export default Input;
