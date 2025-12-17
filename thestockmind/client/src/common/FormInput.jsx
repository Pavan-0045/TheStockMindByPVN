import React from "react";
export function BaseInput({
  label,
  name,
  type = "text",
  register,
  rules = {},
  error,
  inputMode,
  pattern,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
 
      <input
        type={type}
        inputMode={inputMode}
        {...register(name, { ...rules, pattern })}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md focus:outline-none
                   focus:ring-2 focus:ring-blue-500"
      />
 
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
 
 
 
// Char only
export function CharInput(props) {
  return (
    <BaseInput
      {...props}
      pattern={{
        value: /^[A-Za-z\s]+$/,
        message: "Only letters allowed",
      }}
    />
  );
}
 
//number + spl symbol
export function NumberSpecialInput(props) {
  return (
    <BaseInput
      {...props}
      pattern={{
        value: /^[0-9!@#$%^&*()_+\-={}[\]:;"'<>,.?/\\|`~]+$/,
        message: "Only numbers and special symbols allowed",
      }}
    />
  );
}
 
 
// Number only
export function NumberInput(props) {
  return (
    <BaseInput
      {...props}
      inputMode="numeric"
      pattern={{
        value: /^[0-9]+$/,
        message: "Only numbers allowed",
      }}
    />
  );
}
 
//Char and Number
export function NumCharInput(props) {
  return (
    <BaseInput
      {...props}
      pattern={{
        value: /^[A-Za-z0-9\s]+$/,
        message: "Only letters and numbers allowed",
      }}
    />
  );
}
 
// Email
export function EmailInput(props) {
  return (
    <BaseInput
      {...props}
      type="email"
      rules={{
        ...props.rules,
         required: "Email is required" }}
    />
  );
}
 
// Date
export function DateInput(props) {
  return (
    <BaseInput
      {...props}
      type="date"
      rules={{
        ...props.rules,
      }}
    />
  );
}
 
// PIN code
export function PinInput(props) {
  return (
    <BaseInput
      {...props}
      inputMode="numeric"
      pattern={{
        value: /^[0-9]{6}$/,
        message: "PIN must be 6 digits",
      }}
      rules={{
        ...props.rules,    
        required: "PIN is required",
        minLength: {
          value: 6,
          message: "PIN must be 6 digits",
        },
        maxLength: {
          value: 6,
          message: "PIN must be 6 digits",
        },
      }}
    />
  );
}