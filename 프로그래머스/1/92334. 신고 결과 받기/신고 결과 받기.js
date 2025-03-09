const solution = (id_list, report, k) => {
    const reportCount = Array(id_list.length).fill(0).map(_=>[])
    const set = new Set(report)

    for(const list of set) {
        const [from, to] = list.split(' ')
        
        reportCount[id_list.indexOf(to)].push(from)
    }
    // 	[ [ 'apeach' ], [ 'muzi', 'apeach' ], [], [ 'frodo', 'muzi' ] ]
    
    const result = {};
    for(const name of id_list) {
        result[name] = 0;
    }
    for(let i=0; i<reportCount.length; i++) {
        if (reportCount[i].length <= k-1) continue;
        
        reportCount[i].forEach(v=>result[v]+=1)
    }
    
    return (Object.values(result))
}