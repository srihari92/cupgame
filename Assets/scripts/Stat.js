#pragma strict
public static class Statics
{
 	var nextx=new Array();
	var finish=false;
	var steps=6;
	var diffcultylevel=1;
	var currentlevel:int =1;
	var newcolor:Color;
	var levelsteps:int=steps;
	var current_position=2;
	var previous_position=1;
	var A;
	var B;
	var sped=2;
	var isotherclicked:boolean =false;
	var spdforupdate:float =0.9;
	var isleveldown:boolean=false;
	function resetAll()
	{
		steps=6;
		currentlevel=1;
		levelsteps=steps;
		sped=2;
		isotherclicked=false;
		isleveldown=false;
		spdforupdate=.9;
		finish=false;
	}
	private function Statics()
	{
		nextx[0]="upright1";
		nextx[1]="upright2";
		nextx[2]="downleft2";
		nextx[3]="downleft1";
		nextx[4]="uplongright";
		nextx[5]="downlongleft";
	}
	public function isFinished()
	{
		if(steps<0)
		{
			finish=true;
		}
		else 
		{
			finish=false;
		}
	}
	public function nextShift()
	{
		previous_position=current_position;
		current_position=Random .Range (1.0f,4.0f);
		if( current_position==previous_position)
		{
			if(current_position>=0 && current_position<3)
				{
					current_position++;
				}
				else if(current_position>0)
				{
					current_position--;
				}
		}
		newcolor= Color(Random.value, Random.value, Random.value, 1.0f );
	}
	public function returnNo()
	{
		if(current_position==2 && previous_position==1)
		{
			A=0;B=3;
		}
		else if(current_position==1 && previous_position==2)
		{
			A=3;B=0;
		}
		else if(current_position==3 && previous_position==2)
		{
			A=1;B=2;
		}
		else if(current_position==2 && previous_position==3)
		{
			A=2;B=1;
		}
		else if(current_position==3 && previous_position==1)
		{
			A=4;B=5;

		}
		else if(current_position==1 && previous_position==3)
		{
			A=5;B=4;
		}	
	}
	/*public function returnNoB()
	{
		if(current_position==2 && previous_position==1)
		{
			return 0;
		}
		else if(current_position==1 && previous_position==2)
		{
			return 3;
		}
		else if(current_position==3 && previous_position==2)
		{
			return 1;
		}
		else if(current_position==2 && previous_position==3)
		{
			return 2;
		}
		else if(current_position==3 && previous_position==1)
		{
			return 4;
		}
		else if(current_position==1 && previous_position==3)
		{
			return 5;
		}	
	}*/
}