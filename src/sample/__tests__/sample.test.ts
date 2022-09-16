import { sampleEcho } from "../sampleCode";

describe('test',() => {
    it('should be ok', function () {
        const message = 'ok';
        const actual = sampleEcho(message);
        expect(actual).toEqual(message)
    });
})
