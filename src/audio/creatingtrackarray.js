const audioContext = require.context('./tracks', true, /\.webm$/);
// The require.context is a method provided by Webpack, which is a module bundler for Javascript applications. In this context the require.context is used to import all the audio files in a specific folder and subdirectories that match the .webm file extension

// require.context
const audioFiles = audioContext.keys().map(audioContext);
export default audioFiles;