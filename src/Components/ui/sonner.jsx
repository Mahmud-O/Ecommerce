import { Toaster as Sonner } from "sonner"

function Toaster({ ...props }) {
  return (
    <Sonner
      theme="light"
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#FAF6F0",
          color: "#191410",
          border: "2px solid #191410",
          borderRadius: "1rem",
          fontFamily: '"Space Grotesk", system-ui, sans-serif',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
