# DDP messages

Very simple implementation to send DDP messages from the server to the client without touching the database.

## API

On the server:

```javascript
import { emitDDPMessage } from 'meteor/colony:ddp-messages';

// Then anywhere in your code

emitDDPMessage(name, message); // message can be any serializable object
```

On the client:

```javascript
import { getLastDDPMessage } from 'meteor/colony:ddp-messages';

// gets the last message with corresponding name. Will be reactively called when used in Tracker.
const msg = getLastDDPMessage(name);
```

License: MIT
