// if loggable is called as a decorator, with the '@' (@loggable)
// it will automatically receive 3 arguments
export function loggable(
  target: any, // is the context of execution (ex: an instance of Book)
  key: string, // is the name of the property (ex: 'getAverageMark' in Book)
  descriptor: PropertyDescriptor // is what we find in Object.defineProperty
) {
  // copy value of the current descriptor
  const originalMethod = descriptor.value;

  // replace it with our new ehancements
  descriptor.value = function(...args) {
    // log the class name, the prop name and the argument passed, for debug
    console.log(`-- Executing ${target.constructor.name}::${key}`, ...args);

    // now let's perform the original job
    // but with the good execution context (partially provided by TS)
    const result = originalMethod.apply(this, args);

    // log the result for debug pupose
    console.log(`-- Method return value ${result}`);

    // finally, return it, like the orignal method should do
    return result;
  };
  // then return the brand new descriptor
  return descriptor;
  // any @loggable method will automatically be console logged on execution
}
