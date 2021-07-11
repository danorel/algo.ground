import { NetworkProblem } from "./network";

const networkSuccessLogs = require("./__fixtures__/network.success.fixture.json");
const networkFailureLogs = require("./__fixtures__/network.failure.fixture.json");

describe('NetworkUnionFind', function () {
    describe('find', () => {
        test('returns correct timestamp with success fixture', () => {
            const np = new NetworkProblem(9);
            expect(np.find(networkSuccessLogs)).toEqual(10);
        });

        test('returns -1 with failure fixture', () => {
            const np = new NetworkProblem(9);
            expect(np.find(networkFailureLogs)).toEqual(-1);
        });
    });
});