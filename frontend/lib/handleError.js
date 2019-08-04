export default (error) => {
    console.log(`Error from handleError.js: `, error);
    // throw new Error(`Something went wrong. Check console for more details`);
    return `Error: ${error && error.message ? error.message : 'No error message'}`;
};