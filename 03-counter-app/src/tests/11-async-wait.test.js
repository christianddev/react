import { getImage } from "../base/11-async-wait"

describe('11-async-wait.test.js', () => {
    test('should return iamge URL', async() => {
        const url = await getImage();
        expect(url.includes('https://')).toBe(true)
    })    
})
