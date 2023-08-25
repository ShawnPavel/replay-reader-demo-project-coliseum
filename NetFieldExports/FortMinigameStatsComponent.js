const replayParser = require("fortnite-replay-parser");

// TODO: update to the actual types, not just debug object

/**
 * @type {replayParser.NetFieldExport}
 */
module.exports = {
  path: ["/Script/FortniteGame.FortMinigameStatsComponent"],
  parseLevel: 1,
  exportGroup: "gameData",
  exportName: "FortMinigameStats",
  exportType: "object",
  properties: {
    TrackedStats: {
      name: "TrackedStats",
      parseType: "readClass",
      type: "DebugObject",
    },
    LoadedStats: {
      name: "LoadedStats",
      parseType: "readClass",
      type: "DebugObject",
    },
    TrackedStatObjects: {
      name: "TrackedStatObjects",
      parseType: "readClass",
      type: "DebugObject",
    },
    ScoreboardStatObjects: {
      name: "ScoreboardStatObjects",
      parseType: "readClass",
      type: "DebugObject",
    },
    ScoreboardColumnOrder: {
      name: "ScoreboardColumnOrder",
      parseType: "readClass",
      type: "DebugObject",
    },
    Stats: {
      name: "Stats",
      parseType: "readClass",
      type: "DebugObject",
    },
    Filter: {
      name: "Filter",
      parseType: "readClass",
      type: "DebugObject",
    },
    Count: {
      name: "Count",
      parseType: "readClass",
      type: "DebugObject",
    },
    Player: {
      name: "Player",
      parseType: "readClass",
      type: "DebugObject",
    },
    PlayerBucketStats: {
      name: "PlayerBucketStats",
      parseType: "readClass",
      type: "DebugObject",
    },
    BucketIndex: {
      name: "BucketIndex",
      parseType: "readClass",
      type: "DebugObject",
    },
    PlayerBucketStats: {
      name: "PlayerBucketStats",
      parseType: "readClass",
      type: "DebugObject",
    },
    StatNamesInUse: {
      name: "StatNamesInUse",
      parseType: "readClass",
      type: "DebugObject",
    },
    PlayerStats: {
      name: "PlayerStats",
      parseType: "readClass",
      type: "DebugObject",
    },
  },
};
