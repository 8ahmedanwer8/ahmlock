from bluepy import btle
print(btle.__version__)
class myble:
    def __init__(self, char_handle=CHAR_HANDLE, char_uuid=CHAR, mac_addr=MAC_ADDRESS):
        self.char_handle = char_handle
        self.char_uuid = char_uuid
        self.mac_addr = MAC_ADDRESS
        try:
            conn = btle.Peripheral(mac_addr)
            self.conn = conn
            print("Connected")
        except Exception as e:
            print(e)
    
    def unlock(self):
        try: 
            self.conn.writeCharacteristic(self.char_handle, bytes("unlock",'utf-8'))
            print("Sent unlock command")
        except Exception as e:
            print(e)
    
    def lock(self):
        try: 
            self.conn.writeCharacteristic(self.char_handle, bytes("lock",'utf-8'))
            print("Sent lock command")
        except Exception as e:
            print(e)