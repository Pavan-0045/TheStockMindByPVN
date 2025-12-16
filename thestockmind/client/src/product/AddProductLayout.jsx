import React from "react";
 
export default function AddProductLayout({
  title,
  children,
  size = "large",
  Icon,
  IconText,
  CloseIcon,
  Action,
  ActionText,
}) {
  // Set max width based on "size" prop for responsive layout
  const maxWidthClass =
    size === "small"
      ? "max-w-[20rem] sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[36rem]"
      : size === "medium"
      ? "max-w-[24rem] sm:max-w-[34rem] md:max-w-[42rem] lg:max-w-[48rem]"
      : "max-w-[28rem] sm:max-w-[38rem] md:max-w-[48rem] lg:max-w-full"; // default large
 
  return (
    <div
      className={`w-full ${maxWidthClass} mx-auto bg-white shadow-md pb-6 rounded-xl overflow-hidden`}
    >
      {/* Header section */}
      {title && (
        <header className="bg-gray-200 px-4 sm:px-8 py-3 rounded-t-xl flex items-center gap-3 relative">
          {/* Form Title */}
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">
            {title}
          </h2>
 
          {/* Buttons */}
   
 
 
                  <div
                        className="
                            ml-auto
                            flex flex-col sm:flex-col md:flex-row lg:flex-row
                            items-start lg:items-center
                            gap-2 sm:gap-2 md:gap-3">
                       
            {/* Add Custom Field Button */}
            {(Action || ActionText) && (
              <div
                className="
                  flex items-center gap-2 bg-white
                  px-4 py-2 rounded-md
                  text-sm sm:text-base
                  whitespace-nowrap
                  shadow-sm
                  border border-gray-200
                 
                "
              >
                {Action && (
                  <Action className="text-gray-700 text-lg sm:text-xl" />
                )}
                {ActionText && <span className="text-gray-700">{ActionText}</span>}
              </div>
            )}
 
            {/* Bulk Upload Button */}
            {(Icon || IconText) && (
              <div
                className="
                  flex items-center gap-2 bg-white
                  px-4 py-2 rounded-md
                  text-sm sm:text-base
                  whitespace-nowrap
                  cursor-pointer
                  shadow-sm
                  hover:bg-gray-50
                  border border-gray-200
                "
              >
                {Icon && <Icon className="text-gray-700 text-lg sm:text-xl" />}
                {IconText && <span className="text-gray-700">{IconText}</span>}
              </div>
            )}
          </div>
 
          {/* Close Icon */}
          {CloseIcon && (
            <div className="ml-2 absolute top-4 right-5 sm:static">
              <CloseIcon
                className="
                  w-5 h-5
                  sm:w-6 sm:h-6
                  md:w-7 md:h-7
                  lg:w-7 lg:h-7
                  p-1
                  bg-white border rounded-full shadow-sm
                  text-black hover:text-gray-800
                  hover:bg-gray-100
                  cursor-pointer
                "
              />
            </div>
          )}
        </header>
      )}
 
      {/* Content Section */}
      <div
        className="mt-4 px-3 sm:px-5 md:px-6 lg:px-6
            max-h-[80vh] overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
}