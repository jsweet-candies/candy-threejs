package def.threejs;
import def.js.Function;
@jsweet.lang.Mixin(target=def.dom.AudioBuffer.class)
public class AudioBuffer extends def.dom.AudioBuffer {
    public AudioBuffer(Object context){}
    public Object context;
    public Boolean ready;
    public Function[] readyCallbacks;
    native public AudioBuffer load(String file);
    native public void onReady(Function callback);
    protected AudioBuffer(){}
}

