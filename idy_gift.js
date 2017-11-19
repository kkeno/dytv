

// 监控礼物
function detectGift(callback) {
    define(["shark/observer","shark/util/flash/data/1.0"], function (o,n) {
        o.on("mod.chat.msg.gift", function (e) {
            var t = n.decode(e).too();
            console.log("detectGift", t);
            /*
                roomId: t.drid,
                giftName: t.gn,
                hostName: t.dn      
            }
            */
        }),
        callback && callback()
    })
}
//detectGift()