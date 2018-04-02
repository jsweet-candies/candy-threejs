package def.threejs.THREE;
import def.js.Uint8Array;
public class AudioAnalyser extends def.js.Object {
    public AudioAnalyser(Object audio, double fftSize){}
    public Object analyser;
    public Uint8Array data;
    native public Uint8Array getFrequencyData();
    native public double getAverageFrequency();
    /**
     * @deprecated Use {@link AudioAnalyser#getFrequencyData .getFrequencyData()} instead.
     */
    native public Object getData(Object file);
    protected AudioAnalyser(){}
}

