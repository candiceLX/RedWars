var index=2 // 活动状态
var countdown=10 // 倒计时间
var timer=null // 倒计时定时器
var arr=[
  {
    imgurl:'images/redPacket3.jpg',
    text:'<p>您还不是会员哟!<br/>赶快加入会员过来抢礼包吧!</p>'
  },
  {
    imgurl:'images/redPacket5.jpg',
    text:'<p>活动还没开始哟</p>'
  },
  {
    imgurl:'images/redPacket3.jpg',
    text:'<p>恭喜你抢到一个礼包啦！<br>赶快去支付领取吧！<span>（<span class="time">180</span>s后礼包就自动溜走）</span</p>'    
  },
  {
    imgurl:'images/redPacket8.jpg',
    text:'<p>今天的礼包被抢完了，等下一波吧</p>'
  },  
  {
    imgurl:'images/redPacket7.jpg',
    text:'<p>您已经抢过了哟！留个给别人吧</p>'
  }
]
var changeImg=$(".LXmodal .modalIn img") // 模态窗图
var changeText=$(".LXmodal .modalIn p") // 模态窗文字

function setState(index){
    if(index<0 || index>=arr.length){
        index=4
    }
    changeImg.attr("src",arr[index].imgurl)
    changeText.html(arr[index].text)
    $(".LXmodal .modalIn a").remove()
    switch(index){
        case 0:
            $(".LXmodal .modalIn").append("<a href='javascript:;'>加入会员</a>")
        break
        case 1:
            $("#LXbntmodal img").attr("src","images/redPacket2.png")
            $('.LXmodal .modalIn').addClass('short')
        break
        case 2:          
            $(".LXmodal .modalIn").append("<a href='javascript:;'>支付8.9元</a>")
        break
        case 3:
            $('.LXmodal .modalIn').addClass('short')
        break
        default:
            $('.LXmodal .modalIn').addClass('short')
    }
}

setState(index)

$("#LXbntmodal").on('click',function(){
    $('.LXmodal').css({'opacity':'1','top':'0'});
    var localtime=Date.parse(new Date()) // 本地时间戳

    // $.post('url',{},function(data){
    //     index=data.index // 点击获取服务器活动状态
   
        setState(index) // 重新加载活动状态

        if(index==2){
            // 抢到
            //     countdown=data.countdown // 点击获取服务器记录倒计时
            time(countdown)
        }

    // })
})
function time(countdown){
    clearInterval(timer)
    timer=setInterval(function(){
        countdown--
        countdown<=0?clear():$(".LXmodal .time").text(countdown)

    },1000)
}

function clear(){
    setState(5)
    clearInterval(timer)
}

//点击模态窗消失
$('.LXmodal').click(function(e){
    var e=e || event.window
    var node1=e.target.className
    if(node1.indexOf('LXmodal')!=-1){
      $(this).css({'opacity':'0','top':'100%'})
      $(".LXmodal .modalIn a").remove()
    }
})