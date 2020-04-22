public var matIndex:int=0;
public var AniRate:Vector2;
public var textureName:String="_MainTex";
public var Offset:Vector2;//=Vector2.zero;
var pre:float;
var cur:float;
function Start()
{
AniRate.x=1.0f;
AniRate.y=0.93f;
Offset.x=0.0f;
Offset.x=0.0f;
renderer.material.color=Color.black;
pre=Time.time;
}
function LateUpdate () 
{

if(Statics.diffcultylevel>2)
{
cur=Time.time;
Offset +=( AniRate * Time.deltaTime * Statics.spdforupdate);
if(renderer.enabled)
	renderer.materials[matIndex].SetTextureOffset(textureName,Offset);
	if(cur> (pre+.9))
	{
		renderer.material.color=Color(Random.value, Random.value, Random.value, 1.0f );
		pre=cur;
	}
}

}