import DeviceInfo from 'react-native-device-info';

export const getDeviceDetails = async () => {
    const deviceId = DeviceInfo.getUniqueId();
    const deviceName = await DeviceInfo.getDeviceName();
    const model = await DeviceInfo.getModel();

    return {
        deviceId,
        deviceName,
        model
    };
};
