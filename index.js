const replayReader = require("fortnite-replay-parser");
const handleEventEmitter = require("./exports/handleEventEmitter");
const NetFieldExports = require("./NetFieldExports");
const customClasses = require("./Classes");
const fs = require("fs");

(async () => {
  const replayBinary = fs.readFileSync("replays/Match2-Player1.replay");

  console.time();
  const replay = await replayReader(replayBinary, {
    handleEventEmitter,
    customNetFieldExports: NetFieldExports,
    onlyUseCustomNetFieldExports: true,
    customClasses,
    debug: true,
  });
  console.timeEnd();

  fs.writeFileSync("result.json", JSON.stringify(replay, null, 2));
})();
