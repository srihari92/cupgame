var msg:String ;
var i=0;
var c_time: int ;
var pre_time: int;
var showmsg:boolean =false;
var textlevel : TextMesh;
var x: ania;
function Start()
{
	pre_time=Time.time;
}
function Update()
{/*
	Debug .Log(Statics.steps);
	c_time =Time.time;
	Statics.isFinished();
	if(c_time>pre_time && !Statics.finish)
	{
		pre_time=c_time;
		Statics.steps--;
		nextStep ();
	}
*/
}
var mouseenterc=false;
function OnMouseEnter()
{
	mouseenterc=true;
	if(Statics.finish && mouseenterc)
	{
		renderer.material.color =Color.green;
	}
}
function OnMouseExit()
{
	mouseenterc=false;
	if(Statics.finish || !mouseenterc)
	{
		
		renderer.material.color =Color.yellow;
	}
}
var isOpen:boolean =false;
function OnMouseUpAsButton()
{
if(Statics.finish && mouseenterc)
	if(!isOpen)
	{
		showmsg=true;
		Statics.isotherclicked=true;
		animation.Play("open");
		isOpen=true;
		msg="Oops! Wrong one,level down 1 time";
		animation.CrossFade("close");
		yield WaitForSeconds (1);
		
		if(!Statics.isleveldown)
		{
			
			Statics.levelsteps-=3;
			Statics.steps=Statics.levelsteps;
			Statics.currentlevel--;
			if(Statics.currentlevel>=0)
			textlevel.text="Level: "+Statics.currentlevel;
			Statics.spdforupdate=Statics.spdforupdate+0.0375;
			Statics.isleveldown=true;
			x.x();
		}
		yield WaitForSeconds (1);
		isOpen=false;
		Statics.isFinished();	
		showmsg=false;	
	}
}

function OnGUI()
{
	if(showmsg)
	{
		GUI.Box (Rect (Screen.width/2 -51,200 ,250,22),msg);
	}
}


public function doAnimation(num)
{
var tempStr:String =Statics.nextx[num];
animation[tempStr].speed=Statics.sped;
animation.Play(tempStr);
if(Statics.diffcultylevel>1)
	renderer.material.color =Statics.newcolor;
}