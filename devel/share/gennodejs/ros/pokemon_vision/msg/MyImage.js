// Auto-generated. Do not edit!

// (in-package pokemon_vision.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class MyImage {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.height = null;
      this.width = null;
      this.encoding = null;
      this.is_bigendian = null;
      this.step = null;
      this.data = null;
      this.pokemon_name = null;
      this.inner_frame = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('height')) {
        this.height = initObj.height
      }
      else {
        this.height = 0;
      }
      if (initObj.hasOwnProperty('width')) {
        this.width = initObj.width
      }
      else {
        this.width = 0;
      }
      if (initObj.hasOwnProperty('encoding')) {
        this.encoding = initObj.encoding
      }
      else {
        this.encoding = '';
      }
      if (initObj.hasOwnProperty('is_bigendian')) {
        this.is_bigendian = initObj.is_bigendian
      }
      else {
        this.is_bigendian = 0;
      }
      if (initObj.hasOwnProperty('step')) {
        this.step = initObj.step
      }
      else {
        this.step = 0;
      }
      if (initObj.hasOwnProperty('data')) {
        this.data = initObj.data
      }
      else {
        this.data = [];
      }
      if (initObj.hasOwnProperty('pokemon_name')) {
        this.pokemon_name = initObj.pokemon_name
      }
      else {
        this.pokemon_name = '';
      }
      if (initObj.hasOwnProperty('inner_frame')) {
        this.inner_frame = initObj.inner_frame
      }
      else {
        this.inner_frame = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MyImage
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [height]
    bufferOffset = _serializer.uint32(obj.height, buffer, bufferOffset);
    // Serialize message field [width]
    bufferOffset = _serializer.uint32(obj.width, buffer, bufferOffset);
    // Serialize message field [encoding]
    bufferOffset = _serializer.string(obj.encoding, buffer, bufferOffset);
    // Serialize message field [is_bigendian]
    bufferOffset = _serializer.uint8(obj.is_bigendian, buffer, bufferOffset);
    // Serialize message field [step]
    bufferOffset = _serializer.uint32(obj.step, buffer, bufferOffset);
    // Serialize message field [data]
    bufferOffset = _arraySerializer.uint8(obj.data, buffer, bufferOffset, null);
    // Serialize message field [pokemon_name]
    bufferOffset = _serializer.string(obj.pokemon_name, buffer, bufferOffset);
    // Serialize message field [inner_frame]
    bufferOffset = _arraySerializer.int32(obj.inner_frame, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MyImage
    let len;
    let data = new MyImage(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [height]
    data.height = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [width]
    data.width = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [encoding]
    data.encoding = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [is_bigendian]
    data.is_bigendian = _deserializer.uint8(buffer, bufferOffset);
    // Deserialize message field [step]
    data.step = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [data]
    data.data = _arrayDeserializer.uint8(buffer, bufferOffset, null)
    // Deserialize message field [pokemon_name]
    data.pokemon_name = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [inner_frame]
    data.inner_frame = _arrayDeserializer.int32(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += object.encoding.length;
    length += object.data.length;
    length += object.pokemon_name.length;
    length += 4 * object.inner_frame.length;
    return length + 29;
  }

  static datatype() {
    // Returns string type for a message object
    return 'pokemon_vision/MyImage';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e498574929bd4cb9ac5c95e79affa10f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message contains an uncompressed image
    # (0, 0) is at top-left corner of image
    #
    
    Header header        # Header timestamp should be acquisition time of image
                         # Header frame_id should be optical frame of camera
                         # origin of frame should be optical center of camera
                         # +x should point to the right in the image
                         # +y should point down in the image
                         # +z should point into to plane of the image
                         # If the frame_id here and the frame_id of the CameraInfo
                         # message associated with the image conflict
                         # the behavior is undefined
    
    uint32 height         # image height, that is, number of rows
    uint32 width          # image width, that is, number of columns
    
    # The legal values for encoding are in file src/image_encodings.cpp
    # If you want to standardize a new string format, join
    # ros-users@lists.sourceforge.net and send an email proposing a new encoding.
    
    string encoding       # Encoding of pixels -- channel meaning, ordering, size
                          # taken from the list of strings in include/sensor_msgs/image_encodings.h
    
    uint8 is_bigendian    # is this data bigendian?
    uint32 step           # Full row length in bytes
    uint8[] data          # actual matrix data, size is (step * rows)
    string pokemon_name   # detected pokemon's name
    int32[] inner_frame  # format: four pixel locations [x1, y1, x2, y2, x3, y3, x4, y4]
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MyImage(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.height !== undefined) {
      resolved.height = msg.height;
    }
    else {
      resolved.height = 0
    }

    if (msg.width !== undefined) {
      resolved.width = msg.width;
    }
    else {
      resolved.width = 0
    }

    if (msg.encoding !== undefined) {
      resolved.encoding = msg.encoding;
    }
    else {
      resolved.encoding = ''
    }

    if (msg.is_bigendian !== undefined) {
      resolved.is_bigendian = msg.is_bigendian;
    }
    else {
      resolved.is_bigendian = 0
    }

    if (msg.step !== undefined) {
      resolved.step = msg.step;
    }
    else {
      resolved.step = 0
    }

    if (msg.data !== undefined) {
      resolved.data = msg.data;
    }
    else {
      resolved.data = []
    }

    if (msg.pokemon_name !== undefined) {
      resolved.pokemon_name = msg.pokemon_name;
    }
    else {
      resolved.pokemon_name = ''
    }

    if (msg.inner_frame !== undefined) {
      resolved.inner_frame = msg.inner_frame;
    }
    else {
      resolved.inner_frame = []
    }

    return resolved;
    }
};

module.exports = MyImage;
