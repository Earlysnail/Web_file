
function chkvalue(txt)
{
	if(txt.value=="") alert("����δ��д���ݣ�");
}

 function runImg(){}
 runImg.prototype={
  bigbox:null,//���������
  boxul:null,//������ul
  imglist:null,//������img
  numlist:null,//������countNum
  prov:0,//�ϴ���ʾ��
  index:0,//��ǰ��ʾ��
  timer:null,//����ͼƬת��Ч��
  play:null,//�����Զ�����
  imgurl:[],//���ͼƬ
  count:0,//��ŵĸ���
  $:function(obj)
  {
   if(typeof(obj)=="string")
   {
    if(obj.indexOf("#")>=0)
    {
     obj=obj.replace("#","");
     if(document.getElementById(obj))
     {
      return document.getElementById(obj);
     }
     else
     {
      alert("û������"+obj);
      return null;
     } 
    }
    else
    {
     return document.createElement(obj);
    }
   }
   else
   {
    return obj;
   }
  },
  //��ʼ��
  info:function(id)
  {
   this.count=this.count<=5?this.count:5;
   this.bigbox=this.$(id);
   for(var i=0;i<2;i++)
   {
    var ul=this.$("ul");
    for(var j=1;j<=this.count;j++)
    {
     var li=this.$("li");
     li.innerHTML=i==0?this.imgurl[j-1]:j;
     ul.appendChild(li);
    }
    this.bigbox.appendChild(ul);
   }
   this.boxul=this.bigbox.getElementsByTagName("ul");
   this.boxul[0].className="imgList";
   this.boxul[1].className="countNum";
   this.imglist=this.boxul[0].getElementsByTagName("li");
   this.numlist=this.boxul[1].getElementsByTagName("li");
   for(var j=0;j<this.imglist.length;j++)
   {
    this.alpha(j,0);
   }
   this.alpha(0,100);
   this.numlist[0].className="current";
  },
  //��װ�������
  action:function(id)
  {
   this.autoplay();
   this.mouseoverout(this.bigbox,this.numlist);
  },
  //ͼƬ�л�Ч��
  imgshow:function(num,numlist,imglist)
  {
   this.index=num;
   var pralpha=100;
   var inalpha=0;
   for(var i=0;i<numlist.length;i++)
   {
    numlist[i].className="";
   }
   numlist[this.index].className="current";
   clearInterval(this.timer);
                        for(var j=0;j<this.imglist.length;j++)
          {
           this.alpha(j,0);
          }
   this.alpha(this.prov,100);
   this.alpha(this.index,0);
   var $this=this;
   //����͸������ʵ���л�ͼƬ
   this.timer=setInterval(function(){
    inalpha+=2;
    pralpha-=2;
    if(inalpha>100){inalpha=100};//���ܴ���100
    if(pralpha<0){pralpha=100};
    //Ϊ�����Ը���ʽ
    $this.alpha($this.prov,pralpha);
    $this.alpha($this.index,inalpha);
    if(inalpha==100&&pralpha==0){clearInterval($this.timer)};//������100��ʱ����л������
   },20)//������20������Ϊ����ʵ�ֵ
  },
  //����͸����
  alpha:function(i,opacity){
   this.imglist[i].style.opacity=opacity/100;
   this.imglist[i].style.filter="alpha(opacity="+opacity+")";
  },
  //�Զ�����
  autoplay:function(){
   var $this=this;
   this.play=setInterval(function(){
    $this.prov=$this.index;
    $this.index++;
    if($this.index>$this.imglist.length-1){$this.index=0};
    $this.imgshow($this.index,$this.numlist,$this.imglist);
    },2000)
  },
  //��������¼�
  mouseoverout:function(box,numlist)
  {
   var $this=this;
   box.onmouseover=function()
   {
    clearInterval($this.play);
   }
   box.onmouseout=function()
   {
    $this.autoplay($this.index);
   }
   for(var i=0;i<numlist.length;i++)
   {
    numlist[i].index=i;
    numlist[i].onmouseover=function(){
     $this.prov=$this.index;
     $this.imgshow(this.index,$this.numlist,$this.imglist);
    }
   }
  }
 }
 window.onload=function(){
  var runimg=new runImg();
  runimg.count=5;
  runimg.imgurl=[
  "<img src=\"http://www.1tong.com/uploads/wallpaper/landscapes/342-5-1920x1080.jpg\"/>",
  "<img src=\"http://pic.dd008.com/source/201510/20/f1f9aa8eb8.jpg\"/>",
  "<img src=\"http://image55.360doc.com/DownloadImg/2012/09/1618/26871610_20.jpg\"/>",
  "<img src=\"http://p1.qhimg.com/t015a4dad65f7c13633.png\"/>",
  "<img src=\"http://img3.iqilu.com/data/attachment/forum/201308/21/203242sgjy4bbdtpeg11sd.jpg\"/>"];
  runimg.info("#box");
  runimg.action("#box");
 }
 
 
 
 
 
var msg="  ÿһ�Σ� �����ǻ�����ת�� ÿһ�Σ� ����Σ�������ܡ� ����������Ӱ�ӵĴ��ڣ� ���Ƿ�ֻ����½���ϱ��ܡ� �װ����Լ��� ��û�����ۡ� �����Ĺ��£� ��û�н�� ���ǲ��ǣ� �Ѿ������ٷ�����Every time, all around in the rotation. Every time, can be in distress to escape. There is always a shadow of the presence of the sun, people can only run on the land. Dear myself, there is no heart tired. The story of the struggle, there is no answer. You are not, have been unable to refute."
var len=msg.length
var seq=0
var e=1
var speed=200
function type()
{
a.innerText=msg.substring(0,seq)
if(seq==len){seq=msg.length}
else
seq++
setTimeout("type()",speed)
}




today=new Date();
function initArray(){
this.length=initArray.arguments.length
for(var i=0;i<this.length;i++)
this[i+1]=initArray.arguments[i] }
var d=new initArray(
"������",
"����һ",
"���ڶ�",
"������",
"������",
"������",
"������");
document.write(
"<font color=#fff style='font-size:9pt;align:center;font-family: ����'> ",
"�����ǣ�",
today.getFullYear(),"��",
today.getMonth()+1,"��",
today.getDate(),"�� ",
d[today.getDay()+1]," ��ӭ���ʱ�վ��",
"</font>" ); 

function MM_swapImgResore(){
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++)
  x.src=x.oSrc;
}

function MM_preloadImage(){ //v3.0
var d=document;if(d.images){if(!d_MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preloadImage.arguments; for(i=0;i<a.length;i++)
  if(a[i].indexOf("#")!=0)
  {
	  d.MM_p[j]=new Image;d.MM_p[j++].src=a[i];
	  }
}
}
function MM_findObj(n,d)
{  //v4.01
 var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length)
 {
	 d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
	 if(!(x=d[n])&&d.all)x=d.all[n]; for(i=0;!x&&i<d.forms.length;i++)
	 x=d.forms[i][n];
	 for(i=0;!x&&d.layers&&i<d.layers.length;i++)x=MM_findObj(n,d.layers[i].document);
	 if(!x&&d.getElementById)x=d.getElementById(n);return x;
}

function MM_swapImage()
{ //v3.0
  var i,j=0,x,a=MM_swapImage.arguments;document.MM_sr=new Array;
  for(i=0;i<(a.length-2);i+=3)
  if((x=MM_findObj(a[i]))!=null){document.MM_str[j++]=x;
  if(!x.oSrc)
  x.oSrc=x.src;x.src=a[i+2];}

}


function chkvalue(txt)
{
	if(txt.value=="") alert("����δ��д���ݣ�");
}