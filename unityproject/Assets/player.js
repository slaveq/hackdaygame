var tch : Vector3;
var vec : Vector3;
function Start () {

}

function Update () {
    if (Input.touchCount > 0 && 
      Input.GetTouch(0).phase == TouchPhase.Moved) {
      tch = Input.GetTouch(0).position;
     tch.z = 170; // define distance from the camera
     vec = Camera.main.ScreenToWorldPoint(tch);
     Debug.Log("ve x " + vec.x);
     Debug.Log("y " + vec.y);
     Debug.Log("z " + vec.z);
     transform.position = Vector3(vec.x, vec.y, vec.z);
                    
                
    }
}