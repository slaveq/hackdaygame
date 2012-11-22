var tch : Vector3;
var vec : Vector3;
function Start () {

}

function Update () {
    if (Input.touchCount > 0 && 
      Input.GetTouch(0).phase == TouchPhase.Moved) {
      tch = Input.GetTouch(0).position;
     tch.y = 140; // define distance from the camera
     vec = Camera.main.ScreenToWorldPoint(tch);
     transform.position = Vector3(tch.x, tch.z, tch.y);
                    
                
    }
}