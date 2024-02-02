import { useContext } from "react";
import cn from "../../Utils/cn";
import { FormElementContext } from ".";

export const FormSection = ({children}) => {
   const { double} = useContext(FormElementContext);
   return (
      <div
      className={cn(" gap-5 grid grid-cols-1  justify-items-center", {
         "md:grid-cols-2": double,
       })}
      >
         {children}
      </div>
   );
};

