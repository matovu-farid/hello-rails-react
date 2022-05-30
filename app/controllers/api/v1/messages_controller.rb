class Api::V1::MessagesController < ApplicationController
 
  def random
    message = Message.find(Message.pluck(:id).sample)
    render json: message, status: :ok

  end
  
end
