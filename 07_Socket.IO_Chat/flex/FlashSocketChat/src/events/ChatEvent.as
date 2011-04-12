package events
{
	import flash.events.Event;
	
	public class ChatEvent extends Event
	{
		public static const SEND:String = "send";
		
		public var data:*;
		
		public function ChatEvent(type:String, bubbles:Boolean=true, cancelable:Boolean=false)
		{
			super(type, bubbles, cancelable);
		}
	}
}