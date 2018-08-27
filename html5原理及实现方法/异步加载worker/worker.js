onmessage = function(e) {
    console.log(e.data)
    postMessage(deal(e.data))
    // close()
}
function deal(data) {
    return data * data
}