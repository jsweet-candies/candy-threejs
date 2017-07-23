package def.threejs.three;
import def.js.Function;
public class AudioBuffer extends def.js.Object {
    public AudioBuffer(Object context){}
    public Object context;
    public Boolean ready;
    public Function[] readyCallbacks;
    native public AudioBuffer load(String file);
    native public void onReady(Function callback);
    protected AudioBuffer(){}
}

