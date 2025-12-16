import React from "react";

export default function TextBox({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
  validationType,
  options,
  isTextArea = false,
  rules = {},
}) {
  // Pattern rules based on validation type
  const validationRules = {
    char: /^[A-Za-z\s]+$/, // letters only
    number: /^[0-9]+$/, // digits only
    alphanumeric: /^[A-Za-z0-9]+$/,
    specialnum: /^[^A-Za-z]+$/,
  };

  const appliedPattern = validationType
    ? {
        pattern: {
          value: validationRules[validationType.toLowerCase()],
          message:
            validationType === "char"
              ? "Only letters allowed"
              : validationType === "number"
              ? "Only numbers allowed"
              : "Invalid format",
        },
      }
    : {};

  const finalRules = { ...rules, ...appliedPattern };

  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1 font-medium">{label}</label>

      {options ? (
        <select
          {...register(name, finalRules)}
          className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : isTextArea ? (
        <textarea
          {...register(name, finalRules)}
          placeholder={placeholder}
          rows={3}
          className="border rounded-lg px-3 py-2 text-sm outline-none resize-none focus:ring-2 focus:ring-purple-500"
        />
      ) : (
        <input
          {...register(name, finalRules)}
          placeholder={placeholder}
          type={type}
          className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
        />
      )}

      {errors[name] && (
        <p className="text-sm text-red-600 mt-1">{errors[name].message}</p>
      )}
    </div>
  );
}
