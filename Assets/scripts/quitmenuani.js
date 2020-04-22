function OnMouseEnter()
{
renderer.material.color =Color.gray;
animation.Play("menuquitselect");
}
function OnMouseExit()
{
renderer.material.color =Color.white;
animation.Play("menuquitdeselect");
}
function OnMouseDown()
{
Application.Quit();
}