function solution(n_str) {
    return n_str.slice([...n_str].findIndex((v) => +v))
}