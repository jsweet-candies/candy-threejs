package def.threejs.THREE;
import def.dom.PannerNode;
import def.threejs.Audio;
import def.threejs.AudioListener;
public class PositionalAudio extends Audio {
    public PositionalAudio(AudioListener listener){}
    public PannerNode panner;
    native public void setRefDistance(double value);
    native public double getRefDistance();
    native public void setRolloffFactor(double value);
    native public double getRolloffFactor();
    native public void setDistanceModel(double value);
    native public double getDistanceModel();
    native public void setMaxDistance(double value);
    native public double getMaxDistance();
    protected PositionalAudio(){}
}

