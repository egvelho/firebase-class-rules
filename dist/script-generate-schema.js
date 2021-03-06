"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var fs_1 = tslib_1.__importDefault(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
var generate_schema_1 = require("./generate-schema");
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, rulesPath, outPath, rules;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = tslib_1.__read(process.argv.slice(2), 2), rulesPath = _a[0], outPath = _a[1];
                return [4 /*yield*/, Promise.resolve().then(function () { return tslib_1.__importStar(require(rulesPath)); })];
            case 1:
                rules = (_b.sent()).default;
                fs_1.default.writeFileSync(path_1.default.normalize(outPath), JSON.stringify(generate_schema_1.generateSchema(rules)));
                console.log("Firebase rules creation success.");
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=script-generate-schema.js.map