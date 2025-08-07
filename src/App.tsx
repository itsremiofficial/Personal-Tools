// import { PropsWithChildren, Suspense } from "react";
// import { ErrorBoundary } from "react-error-boundary";
// import { Toaster } from "sonner";
// import { useClipboard } from "./hooks/useClipboard";

// const ErrorFallback = () => (
//   <div className="flex items-center justify-center min-h-screen">
//     <p>Something went wrong. Please reload the page.</p>
//   </div>
// );

// function App({ children }: PropsWithChildren) {
//   const { copyToClipboard, copied } = useClipboard();
//   return (
//     <ErrorBoundary FallbackComponent={ErrorFallback}>
//       <Suspense fallback={<div>Loading...</div>}>
//         <div className="antialiased relative">
//           <div className="relative z-50">
//             <Toaster
//               toastOptions={{
//                 className: "my-toast !z-[9999]",
//                 duration: 4000,
//                 style: {
//                   zIndex: 9999,
//                 },
//               }}
//               position="top-center"
//               richColors
//               closeButton
//               expand={false}
//               visibleToasts={3}
//             />
//             <button onClick={() => copyToClipboard("cnic")}>HELLO</button>
//             {children}
//           </div>
//         </div>
//       </Suspense>
//     </ErrorBoundary>
//   );
// }

// export default App;
