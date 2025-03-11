const solution = (nums) => {
    const max = nums.length/2;
    const set = new Set(nums)
    
    return (
        [...set].length>max ? max : [...set].length
    )
}