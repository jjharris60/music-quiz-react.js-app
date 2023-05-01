const audioTracksContext = require.context('../tracks', true, /\.webm$/);
const audioThumbnailsContext = require.context('../images/track-images');

// The require.context is a method provided by Webpack, which is a module bundler for Javascript applications. In this context the require.context is used to import all the audio files in a specific folder and subdirectories that match the .webm file extension

// the require.context fucntion takes three arguments: 1- The directory to search in. This can a be a relative or absolute path and can include subdirectories. 2- A booleon value indicating whether to search subdirectories or not. 3- A regular expression to match against the filenames of the files to be imported

//The require.context function returns a function that can be used to import modules. When called with a module name, this function returns the exported module object for the specified module.
const audioFiles = audioTracksContext.keys().map(audioTracksContext);
const audioThumbnails = audioThumbnailsContext.keys().map(audioThumbnailsContext)
// This is used to create an array of imported audio files by using the 'keys()' and map()' methods.

// The 'keys()' returns an array of all the keys(i.e.,file paths) in the audioContext module.

// The 'map()' method is called on the array of keys returned by audioContext.keys()' For each key in the array the 'map()' method calls audioContext with the key as an argument. This returns the exported module object for the audio file specified by the key.
const audioData = { audioFiles, audioThumbnails }
export default audioData;