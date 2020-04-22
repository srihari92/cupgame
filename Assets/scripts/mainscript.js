#pragma strict
var a : ania;
var b: anib;
var c: anic;
//var x,y,z;
var c_time: float  ;
var Asposition=1;
var Bsposition=2;
var Csposition=3;
var pausetext:String="Pause";
var mute:String ="Mute";
var pre_time: float;
var isreset=false;
var showmsg:boolean = false;
var showbutton:boolean=false;
var showbutton1:boolean=false;
var pausepressed:boolean=false;
var pastemp:boolean=true;
var mstemp:boolean=true;
var msg:String="Congraulation!, Ur going to finish";
function OnGUI()
{
if(GUI.Button(Rect( 10,Screen.height-80,100,20),"Restart"))
		{
			Application.LoadLevel(2);
			Statics.resetAll();
		}
	if(showmsg)
	{
		GUI.TextArea (Rect (Screen.width/2-150,10 ,200,22),msg);
	}
	if(showbutton)
		if(GUI.Button(Rect(Screen.width/2 -51,230 ,60,60),"Restart"))
		{
			Application.LoadLevel(2);
			Statics.resetAll();
		}
	if(showbutton1)
		if(Statics.diffcultylevel==3)
		{
			if(GUI.Button(Rect(Screen.width/2 -51,230 ,60,60),"You Win"))
			{
				Application.LoadLevel(0);
				Statics.resetAll();
			}
		}
	else
		if (GUI.Button(Rect(Screen.width/2 -51,230 ,80,80),"Next Level"))
		{
			Application.LoadLevel(2);
			Statics.resetAll();
			if(Statics.diffcultylevel<3)
				Statics.diffcultylevel++;
		}	
	if(GUI.Button(Rect( 10,10,100,20),"Main Menu"))
	{
		Statics.resetAll();
		Application.LoadLevel(0);
	}
	if(GUI.Button(Rect( 10,40,100,20),pausetext))
	{
		if(pastemp)
		{
			pausepressed=true;
			pausetext="Play";
			pastemp=false;
		}
		else
		{
			pastemp=true;
			pausetext="Pause";
			pausepressed=false;
		}
	}
		if(GUI.Button(Rect( 10,Screen.height-40,100,20),mute))
		{
			if(mstemp)
			{
				mute="Sound";
				mstemp=false;
				audio.Stop();
			}
			else
			{
				mute="Mute";
				audio.Play();
				mstemp=true;
			}
		}
}
function Start()
{
	pre_time=Time.time;
	showbutton=false;
	showbutton1=false;
	showmsg=false;
	pausetext="Pause";
	mute="Mute";
	msg="Congraulation!, Ur going to finish";
	a.first();
}
function Update()
{
	if(!pausepressed && Statics.currentlevel > 0 && Statics.currentlevel < 21)
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
	else if(Statics.currentlevel>20)
	{
		showbutton1=true;
		if(Statics.diffcultylevel<3)
			msg="Congurlation! now move to next Diffculty";
		else
			msg="Congurlaion You Have Finish";
			
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