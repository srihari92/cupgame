#pragma strict
var a : ania;
var b: anib;
var c: anic;
//var x,y,z;
var c_time: float  ;
var Asposition=1;
var Bsposition=2;
var Csposition=3;
var pre_time: float;
var isreset=false;
var showmsg:boolean = false;
var showbutton:boolean=false;
var pausepressed:boolean=false;
var pastemp:boolean=true;
var mstemp:boolean=true;
var msg:String="Congurlation! now move to next Diffculty";
function OnGUI()
{
	if(showmsg)
	{
		GUI.Box (Rect (Screen.width/2-150,10 ,200,22),msg);
	}
	if(showbutton)
		if(GUI.Button(Rect(Screen.width/2 -51,230 ,60,60),"Restart"))
		{
			Application.LoadLevel(2);
			Statics.resetAll();
		}
		
		if(GUI.Button(Rect( 10,10,100,20),"Main Menu"))
		{
		Statics.resetAll();
		Application.LoadLevel(0);
		}
		if(GUI.Button(Rect( 10,35,100,20),"Pause"))
		{
			if(pastemp)
			{
				pausepressed=true;
				pastemp=false;
			}
			else
			{
				pastemp=true;
				pausepressed=false;
			}
		}
		if(GUI.Button(Rect( 10,60,100,20),"Mute"))
		{
			if(mstemp)
			{
				
				mstemp=false;
				audio.Stop();
			}
			else
			{
				audio.Play();
				mstemp=true;
			}
		}
}
function Start()
{
	pre_time=Time.time;
	showbutton=false;
	showmsg=false;
	msg="Congurlation! now u can move to next Diffculty";
	a.first();
}
function Update()
{
	if(!pausepressed && Statics.currentlevel > 0)
	{
		
		c_time =Time.time;
		if(Statics.currentlevel>19)
			showmsg=true;
		
		if(c_time>pre_time+Statics.spdforupdate && !Statics.finish)
		{
	
			Statics.nextShift();
			Statics.returnNo();
			doChange();
			Statics.steps--;
			Statics.isFinished();
			pre_time=c_time;	
			if(Statics.finish)
			{
				doInitialise();
				Debug.Log (""+Statics.levelsteps);
				Debug.Log("Levels "+Statics.currentlevel+" ");
				Debug.Log("Speed of animation "+Statics.sped+" ");
				Debug.Log ("Speed of time "+Statics.spdforupdate+" ");
			}
		}
	}
	if(Statics.currentlevel<1)
	{
		showbutton=true;
		msg="You have lost the game";
		showmsg=true;
	}
}

function doInitialise()
{
	Statics.isotherclicked=false;
	Statics.isleveldown=false;	
}
function doChange()
{
	if( Asposition==Statics.previous_position)
	{
		if(Bsposition==Statics.current_position)
		{
			a.doAnimation(Statics.A);
			Asposition=Statics.current_position;
			b.doAnimation(Statics.B);
			Bsposition=Statics.previous_position;
		}
		else
		{
	//	Debug.Log (Statics.A+"     1 "+Statics.B+"    and position of a & b"+Statics.current_position+""+Statics.previous_position);
			a.doAnimation(Statics.A);
			Asposition=Statics.current_position;
			c.doAnimation(Statics.B);
			Csposition=Statics.previous_position;
		
		}
	}
	else if(Bsposition==Statics.previous_position)
	{
//	Debug .Log ("2 runs");
		if(Asposition==Statics.current_position)
		{
	//	Debug.Log (Statics.A+"     1 "+Statics.B+"    and position of a & b"+Statics.current_position+""+Statics.previous_position);
			b.doAnimation(Statics.A);
			Bsposition=Statics.current_position;
			a.doAnimation(Statics.B);
			Asposition=Statics.previous_position;
			
		}
		else
		{
	//	Debug.Log (Statics.A+"     1 "+Statics.B+"    and position of c & b"+Statics.current_position+""+Statics.previous_position);
			b.doAnimation(Statics.A);
			Bsposition=Statics.current_position;
			c.doAnimation(Statics.B);
			Csposition=Statics.previous_position;
			
		}
	}
	else
	{
//	Debug .Log ("3 runs");
		if(Asposition==Statics.current_position)
		{
	//	Debug.Log (Statics.A+"     1 "+Statics.B+"    and position of a & b"+Statics.current_position+""+Statics.previous_position);
			c.doAnimation(Statics.A);
			Csposition=Statics.current_position;
			a.doAnimation(Statics.B);
			Asposition=Statics.previous_position;
		
		}
		else
		{
	//	Debug.Log (Statics.A+"     1 "+Statics.B+"    and position of a & b"+Statics.current_position+""+Statics.previous_position);
			c.doAnimation(Statics.A);
			Csposition=Statics.current_position;
			b.doAnimation(Statics.B);
			Bsposition=Statics.previous_position;
			
		}
	}
	//	a.doAnimation(x);
	//	b.doAnimation(y);
	//	c.doAnimation(z);
}