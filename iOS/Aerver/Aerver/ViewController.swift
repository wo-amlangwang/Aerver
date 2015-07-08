//
//  ViewController.swift
//  Aerver
//
//  Created by ZengJintao on 7/8/15.
//  Copyright (c) 2015 ZengJintao. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    let socket = SocketIOClient(socketURL:"localhost:8000")
    var name:String?
    //    var resetAck:AckEmitter
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.addHandlers()
        self.socket.connect()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    func addHandlers() {
        //        self.socket.on("hello") {
        //            println("its connect")
        //        }
        self.socket.on("hello") { [weak self] data, ack in
            println("hehe")
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

