import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativeGainNodeFactory } from '../types';

export const createNativeGainNode: TNativeGainNodeFactory = (nativeContext, options = { }) => {
    const nativeNode = nativeContext.createGain();

    assignNativeAudioNodeOptions(nativeNode, options);

    if (options.gain !== undefined) {
        nativeNode.gain.value = options.gain;
    }

    return nativeNode;
};