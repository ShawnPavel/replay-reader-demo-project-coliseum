const replayParser = require("fortnite-replay-parser");
const handlePlayerState = require("./propertyExports/handlePlayerState");
const handleSafezone = require("./propertyExports/handleSafezone");
const handleSlurpTruck = require("./propertyExports/handleSlurpTruck");
const handleFortMinigameStatsComponent = require("./propertyExports/handleFortminigameStatsComponent");

/**
 * @param {replayParser.EventEmittersObject} param0
 */
const handleEventEmitter = ({ propertyExportEmitter }) => {
  propertyExportEmitter.on(
    "SafeZoneIndicator.SafeZoneIndicator_C",
    handleSafezone
  );
  propertyExportEmitter.on(
    "FortniteGame.FortPlayerStateAthena",
    handlePlayerState
  );
  propertyExportEmitter.on(
    "Athena_Prop_SilkyTanker.Athena_Prop_SilkyTanker_C",
    handleSlurpTruck
  );

  propertyExportEmitter.on(
    "FortniteGame.FortMinigameStatsComponent",
    handleFortMinigameStatsComponent
  );
};

module.exports = handleEventEmitter;
