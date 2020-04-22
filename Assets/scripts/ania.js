var i=3;
var c_time: int ;
var pre_time: int;
var msg:String ;
var showmsg:boolean =false;
var textlevel : TextMesh;
// Start()
//{
//	pre_time=Time.time;
//}
//function Update()
//{	
//}
var mouseentera=false;
function OnMouseEnter()
{
	mouseentera=true;
	if(Statics.finish && mouseentera)
	{
		renderer.material.color =Color.green;
	}
}
function OnMouseExit()
{
	mouseentera=false;
	if(Statics.finish || !mouseentera)
	{
		renderer.material.color =Color.yellow;
	}
}
var isOpen:boolean =false;
function first()
{
	animation.Play("open");
	yield WaitForSeconds (2);
	animation.CrossFade ("close");
}
function x()
{
	animation.Play("open");
	animation.CrossFade("close");
}
function OnMouseUpAsButton()
{
if(Statics.finish && mouseentera)
	if(!isOpen)
	{
		showmsg=true;
		animation.Play("open");
		isOpen=true;
		animation.CrossFade ("close");
		if(!Statics.isotherclicked && !Statics.isleveldown)
		{
			msg="Right one, Level Up 1 time";
			Statics.levelsteps+=3;
			Statics.steps=Statics.levelsteps;
			if(Statics.spdforupdate>.187)
			{
				Statics.spdforupdate=Statics.spdforupdate-0.0375;
			}
			Statics.currentlevel++;
			textlevel.text="Level: "+Statics.currentlevel;
			Statics.isotherclicked=true;
			Statics.isleveldown=true;
		}
		else
		{
			msg="Late , level Down 1 time";
		}
		yield WaitForSeconds (2);
		isOpen=false;
		Statics.isFinished();
		showmsg=false;
	}
}

public function doAnimation(num)
{
//if(num!=0)
var tempStr:String =Statics.nextx[num];
animation[tempStr].speed=Statics.sped;
if(Statics.diffcultylevel>1)
	renderer.material.color =Statics.newcolor;
animation.Play(tempStr);
}
function OnGUI()
{
if(showmsg)
	GUI.Box (Rect (Screen.width/2 -51,200 ,250,22),msg);
}
	