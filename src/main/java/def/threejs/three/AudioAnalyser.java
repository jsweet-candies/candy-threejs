package def.threejs.three;
import def.js.Uint8Array;
public class AudioAnalyser extends def.js.Object {
    public AudioAnalyser(Object audio, double fftSize){}
    public Object analyser;
    public Uint8Array data;
    native public Uint8Array getData();
    protected AudioAnalyser(){}
}

