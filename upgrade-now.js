const { promisify } = require("util");
const { exec } = require("child_process");
const execAsync = promisify(exec);
async function installReactAndReactNative() {
  try {
    try {
      const updateResult = await execAsync("npm update --force");
      console.log("Outdated packages updated successfully!🎉");
    } catch (updateError) {
      console.error(`Error updating packages: ${updateError.stderr}`);
    }

    try {
      await execAsync("npm install react@latest --legacy-peer-deps");
      console.log("React upgraded to Latest Version successfully!🎉");
    } catch (error) {
      console.error(`Error installing or upgrading React: ${error.stderr}`);
    }
    try {
      await execAsync("npm install react-native@latest --legacy-peer-deps");
      console.log("React Native upgraded to Latest Version successfully!🎉");
    } catch (error) {
      console.error(`Error installing or upgrading React Native: ${error.stderr}`);
    }
    try {
      await execAsync("npx react-native upgrade");
      console.log("React-native upgrade completed successfully!🎉");
    } catch (error) {
      console.error(`Error running 'npx react-native upgrade': ${error.stderr}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
installReactAndReactNative();
