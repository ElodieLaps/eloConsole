export const isEqual = (prevProps: any, nextProps: any) => {
   console.log(prevProps.name);
   console.log(nextProps.name);
   return prevProps.name === nextProps.name;
}