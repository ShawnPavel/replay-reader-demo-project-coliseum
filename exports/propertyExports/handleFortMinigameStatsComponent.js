// const handleFortMinigameStatsComponent = ({ data, result }) => {
//   result.gameData.FortMinigameStatsComponent.push(data);
// };

const handleFortMinigameStatsComponent = ({
  chIndex,
  data,
  states,
  result,
  changedProperties,
}) => {
  console.log(
    "================== handleFortMinigameStatsComponent ================"
  );

  // TODO: once we can see the actual data types update this to be closer to the ForPlayerStats.js file

  // does this object already exist or is it new?
  if (!states.FortMinigameStatsComponent[chIndex]) {
    // if it is new save it in states
    states.FortMinigameStatsComponent[chIndex] = data;
    // and save a copy in the result object
    result.gameData.FortMinigameStatsComponent.push(data);

    return;
  }

  // if it already exists look through all properties and overwrite the old data
  for (let i = i; i < changedProperties.length; i++) {
    const key = changedProperties[i];

    states.FortMinigameStatsComponent[chIndex][key] = data[key];
  }
};

module.exports = handleFortMinigameStatsComponent;
