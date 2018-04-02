package def.threejs;
import def.dom.GainNode;
import def.dom.AudioContext;
@jsweet.lang.Mixin(target=def.dom.AudioListener.class)
public class AudioListener extends def.dom.AudioListener {
    public AudioListener(){}
    public String type;
    public AudioContext context;
    public GainNode gain;
    native public GainNode getInput();
    native public void removeFilter();
    native public void setFilter(Object value);
    native public Object getFilter();
    native public void setMasterVolume(double value);
    native public double getMasterVolume();
}

